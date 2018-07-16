export class Details {
  lname: string;
  fname: string;
  email: string;
  id: string;
  role: string;
  username: string;
  pin: string;
  image;



  constructor(fname: string, lname: string, id: string, email: string, role: string, username: string, pin: string, image) {
    this.lname = lname;
    this.fname = fname;
    this.id = id;
    this.email = email;
    this.role = role;
    this.pin = pin;
    this.username = username;
    this.image = image;
  }
}