const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');

const Datastore = require('nedb');

const chats = new Datastore({
  filename: path.resolve(__dirname, 'chats.db'),
  autoload: true,
});

const profile = new Datastore({
  filename: path.resolve(__dirname, 'profile.db'),
  autoload: true,
});

app.use(express.json());

app.get('/chats', (req, res) => {
  chats.find({}, (err, docs) => {
    if(err) {
      return res.status(500).json({message: 'Unexpected error'});
    }
    res.json(docs);
  });
});

app.get('/profile', (req, res) => {
  profile.findOne({}, (err, doc) => {
    if(err) {
      return res.status(500).json({message: 'Unexpected error'});
    }
    res.json(doc);
  });
});

app.post('/profile', (req, res) => {
  profile.findOne({}, (err, doc) => {
    if(err) {
      return res.status(500).json({message: 'Unexpected error'});
    }
    
    if (doc) {
      profile.update({}, req.body, {}, (err, numReplaced) => {
        if (err || numReplaced <=0) {
          return res.status(500).json({message: 'Unexpected error'});
        }

        return res.json({ message: 'success' });
      });
    } else {
      profile.insert(req.body, (err, newDoc) => {
        if (err) {
          return res.status(500).json({message: 'Unexpected error'});
        }

        res.json({ message: 'success' });
      });
    }
  });
});

//default namespace
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('new chat', (body) => {
    chats.insert(body, (err, newDoc) => {
      socket.broadcast.emit('chat message', newDoc);
      socket.emit('chat message', newDoc);
    });
  });

  socket.on('chat message', (body) => {
    const { chatId, ...message } = body;
    chats.update({ _id: chatId }, { $push: { messages: message } }, {}, () => {
      chats.findOne({ _id: chatId }, (err, doc) => {
        socket.broadcast.emit('chat message', doc);
        socket.emit('chat message', doc);
      });
    });
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});