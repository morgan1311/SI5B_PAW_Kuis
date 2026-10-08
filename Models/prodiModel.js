let prodi = [
  { id: 1, nama: 'Sistem Informasi', jenjang: 'S1', jadwalUjianId: 1 },
  { id: 2, nama: 'Informatika', jenjang: 'S1', jadwalUjianId: 1 },
];
let nextId = 3;

function getAll(jadwalUjianId) {
  if (jadwalUjianId) return prodi.filter((p) => p.jadwalUjianId === jadwalUjianId);
  return prodi;
}

function getById(id) {
  return prodi.find((p) => p.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  prodi.push(baru);
  return baru;
}

module.exports = { getAll, getById, create };