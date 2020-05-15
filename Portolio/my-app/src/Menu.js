import React, { Component } from 'react';

class Menu extends Component {
  state = {
    isChecked: { noTags: true },
    design: {
      own: true,
      premade: true,
    },
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
      this.setState(
        (prevState) => ({
          ...prevState,
          isChecked: {
            ...prevState.isChecked,
            [elem]: false,
          },
        }),
        function () {
          this.props.actionTag(this.state.isChecked);
        }
      );
    });
  }

  handleClick = (e) => {
    let target = e.target.innerHTML;
    let tagList = this.constructTags();

    if (target === 'No Tags') {
      if (this.state.isChecked.noTags === true) {
        console.log('pode nao');
      } else {
        tagList.forEach((elem) => {
          this.setState(
            (prevState) => ({
              isChecked: {
                ...prevState.isChecked,
                noTags: true,
                [elem]: false,
              },
            }),
            function () {
              this.props.actionTag(this.state.isChecked);
            }
          );

          document.getElementById(elem).classList.remove('selected');
        });

        e.target.classList.toggle('selected');
      }
    } else {
      document.getElementById('noTags').classList.remove('selected');

      this.setState(
        (prevState) => ({
          ...prevState,
          isChecked: {
            ...prevState.isChecked,
            [target]: !prevState.isChecked[target],
            noTags: false,
          },
        }),
        function () {
          this.props.actionTag(this.state.isChecked);
          if (
            Object.keys(this.state.isChecked).every(
              (k) => !this.state.isChecked[k]
            )
          ) {
            this.setState(
              (prevState) => ({
                ...prevState,
                isChecked: {
                  ...prevState.isChecked,
                  noTags: true,
                },
              }),
              function () {
                this.props.actionTag(this.state.isChecked);
              }
            );

            document.getElementById('noTags').classList.add('selected');
          }
        }
      );

      e.target.classList.toggle('selected');
    }
  };

  handleClickDesign = (e) => {
    e.target.classList.toggle('selected');

    if (e.target.id === 'own') {
      this.setState(
        (prevState) => ({
          ...prevState,
          design: {
            ...prevState.design,
            own: !prevState.design.own,
          },
        }),
        function () {
          if (
            Object.keys(this.state.design).every((k) => !this.state.design[k])
          ) {
            this.setState(
              (prevState) => ({
                ...prevState,
                design: {
                  ...prevState.design,
                  premade: true,
                },
              }),
              function () {
                this.props.actionDesign(this.state.design);
              }
            );
            document.getElementById('premade').classList.toggle('selected');
          }
          this.props.actionDesign(this.state.design);
        }
      );
    } else if (e.target.id === 'premade') {
      this.setState(
        (prevState) => ({
          ...prevState,
          design: {
            ...prevState.design,
            premade: !prevState.design.premade,
          },
        }),
        function () {
          if (
            Object.keys(this.state.design).every((k) => !this.state.design[k])
          ) {
            this.setState(
              (prevState) => ({
                ...prevState,
                design: {
                  ...prevState.design,
                  own: true,
                },
              }),
              function () {
                this.props.actionDesign(this.state.design);
              }
            );
            document.getElementById('own').classList.toggle('selected');
          }
          this.props.actionDesign(this.state.design);
        }
      );
    }
  };

  handleMenu = (e) => {
    const arrowBtn = document.getElementById('arrowBtn');
    const options = document.getElementById('options');

    options.classList.toggle('menuShow');
    arrowBtn.classList.toggle('menuShow');
  };

  render() {
    return (
      <div className="menu">
        <div className="show">
          <button id="arrowBtn" onClick={this.handleMenu}>
            <img
              src="https://image.flaticon.com/icons/svg/271/271228.svg"
              alt="arrow icon"
              id="arrow"
            />
          </button>
        </div>
        <div className="options" id="options">
          <div>
            <h5>Tags</h5>
            <button id="noTags" onClick={this.handleClick} className="selected">
              No Tags
            </button>
            {this.constructHTML()}
            <h5>Design</h5>
            <button
              className="selected"
              id="own"
              onClick={this.handleClickDesign}
            >
              Design próprio
            </button>
            <button
              className="selected"
              id="premade"
              onClick={this.handleClickDesign}
            >
              Design pronto
            </button>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.constructState();
    this.props.actionDesign(this.state.design);
    this.props.actionTag(this.state.isChecked);
  }
}

export default Menu;
