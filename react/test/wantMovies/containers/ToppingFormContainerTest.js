import ToppingFormContainer from '../../../src/wantMovies/containers/ToppingFormContainer';
import ToppingForm from '../../../src/wantMovies/components/ToppingForm';
import GetSuggestionsButton from '../../../src/sharedComponents/GetSuggestionsButton'

describe('ToppingFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(ToppingFormContainer.prototype, 'handleChange').and.callThrough();
    spyOn(ToppingFormContainer.prototype, 'handleFormSubmit').and.callThrough();

    wrapper = mount(<ToppingFormContainer />);
  });

  it('should should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({ toppings: [], queryString: '' });
  });

  it('should render a form tag', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render a ToppingForm Component', () => {
    expect(wrapper.find(ToppingForm)).toBePresent();
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('should render an img tag', () => {
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('should initially render the ToppingForm component the correct props', () => {
    expect(wrapper.find(ToppingForm).props()).toEqual({
      handleChange: jasmine.any(Function)
    });
  })

  it('should invoke the handleChange function when a box is checked', () => {
    wrapper.find(ToppingForm).find('input').at(0).simulate('change', { target: { checked: true } })

    expect(ToppingFormContainer.prototype.handleChange).toHaveBeenCalled();
  });

  it('should render a GetSuggestionsButton when a box is checked', () => {
    wrapper.setState({toppings: ['Bacon']})

    expect(wrapper.find(GetSuggestionsButton)).toBePresent();
  });

  it('should invoke the handleFormSubmit function when the form is submitted', () => {
    wrapper.find('form').at(0).simulate('submit')

    expect(ToppingFormContainer.prototype.handleFormSubmit).toHaveBeenCalled();
  });
});
