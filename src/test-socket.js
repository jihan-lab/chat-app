import { io } from 'socket.io-client';

const socket = io('http://localhost:3000'); // Ganti sesuai port NestJS

socket.on('connect', () => {
  console.log('Connected', socket.id);

  // Kirim pesan ke server
  socket.emit('send_message', {
    content: 'Pesan dari test client!',
    senderId: 2, // pastikan ini ID user valid kalau kamu simpan ke DB
  });
});

socket.on('receive_message', (data) => {
  console.log('Pesan diterima dari server:', data);
});
