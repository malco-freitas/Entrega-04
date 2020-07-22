import React from "react";
import axios from "axios";

class RequestPage extends React.Component {
  state = {
    loading: true,
    userName: "Lucas",
    error: null,
  };

  getGithubData = async () => {
    this.setState({ loading: true });
    try {
      const response = await axios.get("http://api.github.com/usersasasasassa");
      this.setState({ userName: response.data[0].login });
      console.log(response.data[0].login);
    } catch (error) {
      this.setState({ error: "Algum problema aconteceu" });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.getGithubData();
  }

  render() {
    const getGithubData = async () => {
      try {
        const response = await axios.get("http://api.github.com/users");
        this.setState({ userName: response.data[0].login });
        console.log(response.data[0].login);
        alert("fim");
      } catch (error) {
        alert("algum erro ocorreu");
      }
    };

    return (
      <div>
        <button onClick={getGithubData}>Pegar dados da API do github</button>
        <h1>{this.state.error ? this.state.error : this.state.userName}</h1>
        <h1>{this.state.loading ? "Carregando" : null}</h1>
      </div>
    );
  }
}

export default RequestPage;
