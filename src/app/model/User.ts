export class User{
    first_name: string = "";
    last_name: string = "";
    username: string = "";
    password: string = "";

    getFirstName(): string{
        return this.first_name;
    }
    setFirstName(firstName: string){
        this.first_name = firstName;
    }
    getLastName(): string{
        return this.last_name;
    }
    setLastName(lastName: string){
        this.last_name = lastName;
    }
    getUsername(): string{
        return this.username;
    }
    setUsername(username: string){
        this.username = username;
    }
    getPassword(): string{
        return this.password;
    }
    setPassword(password: string){
        this.password = password;
    }
  }