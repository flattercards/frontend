export default function(server) {
  const card = server.create('card', { code: 'asdf' });

  for (const from of ['sender', 'sender', 'receiver', 'sender', 'receiver']) {
    server.create('messages', { card: card, from });
  }
}
