import { ThemeProvider } from '@material-ui/core/styles';
import generalTheme from './components/themes/generalTheme';
import NavBar from "./components/header/NavBar";
import Main from './components/main/Main';


function App() {
  const sectionsContent = [
    {
        title: "la escuela",
        content: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum facilisis libero, eu dignissim elit eleifend in. Ut vulputate facilisis feugiat. Vestibulum efficitur enim blandit cursus tincidunt. Quisque sollicitudin nunc augue, nec vulputate sem cursus et. Mauris ultrices urna vel blandit sodales. Integer ornare pharetra viverra. Nullam placerat, odio in maximus laoreet, sem urna posuere lectus, aliquam volutpat leo lorem vitae quam.",
        }
    },
    {
        title: "clases online",
        content: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum facilisis libero, eu dignissim elit eleifend in. Ut vulputate facilisis feugiat. Vestibulum efficitur enim blandit cursus tincidunt. Quisque sollicitudin nunc augue, nec vulputate sem cursus et. Mauris ultrices urna vel blandit sodales. Integer ornare pharetra viverra. Nullam placerat, odio in maximus laoreet, sem urna posuere lectus, aliquam volutpat leo lorem vitae quam.",
        }
    },
    {
        title: "horarios",
        content: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum facilisis libero, eu dignissim elit eleifend in. Ut vulputate facilisis feugiat. Vestibulum efficitur enim blandit cursus tincidunt. Quisque sollicitudin nunc augue, nec vulputate sem cursus et. Mauris ultrices urna vel blandit sodales. Integer ornare pharetra viverra. Nullam placerat, odio in maximus laoreet, sem urna posuere lectus, aliquam volutpat leo lorem vitae quam.",
        }
    },
    {
        title: "formación",
        content: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum facilisis libero, eu dignissim elit eleifend in. Ut vulputate facilisis feugiat. Vestibulum efficitur enim blandit cursus tincidunt. Quisque sollicitudin nunc augue, nec vulputate sem cursus et. Mauris ultrices urna vel blandit sodales. Integer ornare pharetra viverra. Nullam placerat, odio in maximus laoreet, sem urna posuere lectus, aliquam volutpat leo lorem vitae quam.",
        }
    },
    {
        title: "galeria",
        content: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum facilisis libero, eu dignissim elit eleifend in. Ut vulputate facilisis feugiat. Vestibulum efficitur enim blandit cursus tincidunt. Quisque sollicitudin nunc augue, nec vulputate sem cursus et. Mauris ultrices urna vel blandit sodales. Integer ornare pharetra viverra. Nullam placerat, odio in maximus laoreet, sem urna posuere lectus, aliquam volutpat leo lorem vitae quam.",
        }
    },
    {
        title: "ubicación",
        content: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum facilisis libero, eu dignissim elit eleifend in. Ut vulputate facilisis feugiat. Vestibulum efficitur enim blandit cursus tincidunt. Quisque sollicitudin nunc augue, nec vulputate sem cursus et. Mauris ultrices urna vel blandit sodales. Integer ornare pharetra viverra. Nullam placerat, odio in maximus laoreet, sem urna posuere lectus, aliquam volutpat leo lorem vitae quam.",
        }
    },
    {
        title: "contacto",
        content: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam condimentum facilisis libero, eu dignissim elit eleifend in. Ut vulputate facilisis feugiat. Vestibulum efficitur enim blandit cursus tincidunt. Quisque sollicitudin nunc augue, nec vulputate sem cursus et. Mauris ultrices urna vel blandit sodales. Integer ornare pharetra viverra. Nullam placerat, odio in maximus laoreet, sem urna posuere lectus, aliquam volutpat leo lorem vitae quam.",
        }
    },

  ]

  return (
    <ThemeProvider theme={generalTheme}>
      {/* NavBar should ambrace the content of the page, so it can sroll up with the Trigger  */}
      <NavBar sections={sectionsContent}>
        <Main sections={sectionsContent}/>
      </NavBar>
    </ThemeProvider>
  );
}

export default App;
