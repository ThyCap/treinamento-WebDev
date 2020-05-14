import React, { Component } from 'react';

class Menu extends Component {
  state = {
    isChecked: { noTags: true },
  };

  constructTags() {
    let tagList = [];

    this.props.projects.map((elem) => {
      elem.tags.map((tag) => {
        tagList.push(tag);
        return null;
      });
      return null;
    });

    return [...new Set(tagList)];
  }

  constructHTML() {
    let tagList = this.constructTags();

    const menuList = tagList.map((tag) => {
      return (
        <button id={tag} key={tagList.indexOf(tag)} onClick={this.handleClick}>
          {tag}
        </button>
      );
    });

    return menuList;
  }

  constructState() {
    let tagList = this.constructTags();

    tagList.forEach((elem) => {
      this.setState((prevState) => ({
        isChecked: {
          ...prevState.isChecked,
          [elem]: false,
        },
      }));
    });
  }

  handleClick = (e) => {
    let target = e.target.innerHTML;
    let tagList = this.constructTags();
    let state = this.state;

    if (target === 'No Tags') {
      if (this.state.isChecked.noTags === true) {
        console.log('pode nao');
      } else {
        tagList.forEach((elem) => {
          this.setState((prevState) => ({
            isChecked: {
              ...prevState.isChecked,
              noTags: true,
              [elem]: false,
            },
          }));

          document.getElementById(elem).classList.remove('selected');
        });
      }
    } else {
      document.getElementById('noTags').classList.remove('selected');
      this.setState((prevState) => ({
        isChecked: {
          ...prevState.isChecked,
          [target]: !prevState.isChecked[target],
          noTags: false,
        },
      }));

      //checar se tudo eh falso
      console.log(
        Object.keys(state.isChecked).every((k) => !state.isChecked[k])
      );
      if (Object.keys(state.isChecked).every((k) => !state.isChecked[k])) {
        this.setState((prevState) => ({
          isChecked: {
            ...prevState.isChecked,
            noTags: true,
          },
        }));

        document.getElementById('noTags').classList.add('selected');
      }
    }

    e.target.classList.toggle('selected');
  };

  handleClickDesign = (e) => {
    e.target.classList.toggle('selected');
  };

  render() {
    console.log(this.state);
    return (
      <div className="menu">
        <h5>Tags</h5>
        <button id="noTags" onClick={this.handleClick} className="selected">
          No Tags
        </button>
        {this.constructHTML()}
        <h5>Design</h5>
        <button onClick={this.handleClickDesign}>Design próprio</button>
        <button onClick={this.handleClickDesign}>Design pronto</button>
      </div>
    );
  }

  componentDidMount() {
    this.constructState();
    console.log(this.state);
  }
}

export default Menu;
