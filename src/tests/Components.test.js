import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import AddChore from '../AddChore';
import Chore from '../Chore';
import ChoreList from '../AddChore';
import EditChore from '../EditChore';
import Nav from '../Nav';
import Welcome from '../Welcome';

describe('Main Section', () => {
  const addChore = <BrowserRouter><AddChore /></BrowserRouter>;
  const chore = <BrowserRouter><Chore /></BrowserRouter>;
  const choreList = <BrowserRouter><ChoreList /></BrowserRouter>;
  const editChore = <BrowserRouter><EditChore /></BrowserRouter>;
  const nav = <BrowserRouter><Nav /></BrowserRouter>;
  const welcome = <BrowserRouter><Welcome /></BrowserRouter>;
  describe('The Chore Details (Add) Page', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(addChore, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
      const tree = renderer.create(addChore).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('The Chore component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(chore, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('render the UI as expected', () => {
      const tree = renderer.create(chore).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('The Chore List', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(choreList, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
      const tree = renderer.create(choreList).toJSON();
      expect(tree).toMatchSnapshot();
    });
    describe('The Chore Details (Edit) Page', () => {
      it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(editChore, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      it('renders the UI as expected', () => {
        const tree = renderer.create(editChore).toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
  describe('The Nav', () => {
    it('render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(nav, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('render the UI as expected', () => {
      const tree = renderer.create(nav).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('The Welcome Page', () => {
    it('render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(welcome, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    it('render the UI as expected', () => {
      const tree = renderer.create(welcome).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});