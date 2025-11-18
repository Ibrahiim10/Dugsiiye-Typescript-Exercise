function login(user) {
    console.log(user.username);
    console.log(user.password);
}
// login with email
login({
    username: "Mc",
    password: "mc1234",
    email: "mc@dugsiiye.com"
});
// login without email
login({
    username: "Mc",
    password: "mc1234"
});
// #3
// interface User {
//   readonly id: number;
//   username: string;
//   password: string;
//   email?: string;
// }
// const user: User = {
//   id: 1,
//   username: "ibrahim",
//   password: "12345",
// };
// user.id = 10; 
