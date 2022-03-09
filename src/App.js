import "./App.css";
import { Component } from "react";
import students from "./students.js";
import Student from "./Student";

class App extends Component {
  render() {
    const studentComponents = students.map((student, index) => {
      return (
        <Student
          key={`Student-list=${index}`}
          name={student.name}
          bio={student.bio}
          scores={student.scores}
        />
      );
    });
    return <>{studentComponents}</>;
  }
}

export default App;
