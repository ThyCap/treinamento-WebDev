import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
  state = {
    loginList: [
      {
        id: 1,
        name: 'Thyago',
        login: 'thycap',
        password: '123456',
      },
      {
        id: 2,
        name: 'Hamilton',
        login: 'alex',
        password: '123456',
      },
    ],
    loggedUser: {},
    isLogged: false,
    register: false,
    changePword: false,
  };

  checkAndLogin = (e) => {
    let log = document.getElementById('loginInput').value;
    let pword = document.getElementById('passwordInput').value;

    this.state.loginList.forEach((login) => {
      if (log === login.login && pword === login.password) {
        this.setState((prevState) => ({
          ...prevState,
          isLogged: true,
          loggedUser: login,
        }));
        console.log('foi');
        document.getElementById('loginError').innerHTML = 'Tudo ok';
      } else if (log === login.login && pword !== login.password) {
        console.log('senha errada!');
        document.getElementById('loginError').innerHTML = 'senha errada!';
      } else {
        document.getElementById('loginError').innerHTML =
          'Usuário desconhecido';
      }
    });
  };

  checkAndRegister = (e) => {
    let log = document.getElementById('loginRegister').value;
    let name = document.getElementById('nameRegister').value;
    let pword = document.getElementById('passwordRegister').value;
    let repword = document.getElementById('repasswordRegister').value;

    // check if the username is already in the database
    const test = this.state.loginList.some((login) => log === login.login);

    if (
      pword === repword &&
      !test &&
      pword !== '' &&
      log !== '' &&
      name !== ''
    ) {
      document.getElementById('registerError').innerHTML = '';

      let tempList = [...this.state.loginList];

      tempList.push({
        login: log,
        password: pword,
        name: name,
        id: tempList.slice(-1)[0].id + 1,
      });

      this.setState(
        (prevState) => ({
          ...prevState,
          register: false,
          loginList: tempList,
        }),
        function () {
          console.log(this.state);
          document.getElementById('loginInput').value = '';
          document.getElementById('passwordInput').value = '';
        }
      );
    } else if (pword === '' || repword === '' || log === '' || name === '') {
      document.getElementById('registerError').innerHTML =
        'Existe algum valor vazio!';
    } else if (pword !== repword) {
      document.getElementById('registerError').innerHTML =
        'Senhas são diferentes';
    }
  };

  checkAndChangePword = (e) => {
    e.preventDefault();

    let currentPword = document.getElementById('currentChange').value;
    let pword = document.getElementById('passwordChange').value;
    let rePword = document.getElementById('repasswordChange').value;
    const logError = document.getElementById('loginError');

    let currentId = this.state.loggedUser.id;
    let logins = [...this.state.loginList];

    if (
      currentPword === this.state.loggedUser.password &&
      pword === rePword &&
      pword !== ''
    ) {
      logins.forEach((login) => {
        if (login.id === currentId) {
          login.password = pword;
        }
      });

      this.setState(
        (prevState) => ({
          ...prevState,
          loginList: logins,
          changePword: false,
          loggedUser: {
            ...prevState.loggedUser,
            password: pword,
          },
        }),
        function () {
          logError.innerHTML = 'Senha alterada!';
          alert('Senha alterada com sucesso!');
          this.render();
        }
      );
    } else if (currentPword === '' || pword === '' || rePword === '') {
      logError.innerHTML = 'Input vazio';
    } else if (currentPword !== this.state.loggedUser.password) {
      logError.innerHTML = 'Senha atual errada';
    } else if (pword !== rePword) {
      logError.innerHTML = 'Senhas são diferentes';
    }
  };

  unlog = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      isLogged: false,
    }));
  };

  registerPage = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      register: !prevState.register,
    }));
  };

  changePword = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      changePword: !prevState.changePword,
    }));
  };

  render() {
    try {
      console.log(document.getElementById('loginError').innerHTML);
    } catch (err) {
      console.log('ih fudeu');
    }
    if (this.state.isLogged && !this.state.changePword) {
      // logged in page
      return (
        <form id="loginForm" className="form hide">
          <h1>Olá, {this.state.loggedUser.name}</h1>
          <p id="loginError" className="loginError"></p>
          <button onClick={this.changePword}>Alterar Senha</button>
          <button onClick={this.unlog}>Desfazer login</button>
        </form>
      );
    } else if (this.state.isLogged && this.state.changePword) {
      // change pword page
      return (
        <form id="loginForm" className="form hide">
          <p>Senha atual</p>
          <input type="password" id="currentChange"></input>
          <p>Nova Senha</p>
          <input type="password" id="passwordChange"></input>
          <p>Confirme Nova Senha</p>
          <input type="password" id="repasswordChange"></input>
          <p id="loginError" className="loginError"></p>
          <button onClick={this.checkAndChangePword}>Mudar senha</button>
          <button onClick={this.changePword}>Cancelar</button>
        </form>
      );
    } else if (!this.state.isLogged && !this.state.register) {
      // login page
      return (
        <form id="loginForm" className="form hide">
          <p>Usuário</p>
          <input type="text" id="loginInput"></input>
          <p>Senha</p>
          <input type="password" id="passwordInput"></input>
          <p id="loginError" className="loginError"></p>
          <button onClick={this.checkAndLogin}>Login</button>
          <button onClick={this.registerPage}>Registrar</button>
        </form>
      );
    } else {
      // register page
      return (
        <form id="loginForm" className="form hide">
          <p>Usuário</p>
          <input type="text" id="loginRegister"></input>
          <p>Nome</p>
          <input type="text" id="nameRegister"></input>
          <p>Senha</p>
          <input type="password" id="passwordRegister"></input>
          <p>Confirme a Senha</p>
          <input type="password" id="repasswordRegister"></input>
          <p id="loginError" className="loginError"></p>
          <p id="registerError" className="loginError"></p>
          <button onClick={this.checkAndRegister}>Registrar</button>
          <button onClick={this.registerPage}>Voltar para Login</button>
        </form>
      );
    }
  }
}

export default Login;
