module.exports = {
  gerarUsuario() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const random1 = Array.from({ length: 7 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    const random2 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return `${random1}_${random2}`;
  }
};
