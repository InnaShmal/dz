const users = [
    { id: 1, name: 'Vasya' },
    { id: 2, name: 'Nick' },
    { id: 1, name: 'Vasya' },
];

const uniqueUsers = Array.from(new Set(users.map((user) => user.id))).map(
    (id) => users.find((user) => user.id === id)
);

console.log(uniqueUsers);
