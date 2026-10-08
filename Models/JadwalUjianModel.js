let jadwalUjian = [
  { id: 1, nama: '07:50' },
  { id: 2, nama: '09:40' },
];
let nextId = 3;

function getAll() {
  return fakultas;
}

function getById(id) {
  return fakultas.find((f) => f.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  fakultas.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };