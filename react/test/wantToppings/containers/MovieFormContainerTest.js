import MovieFormContainer from '../../../src/wantToppings/containers/MovieFormContainer';
import MovieDropdown from '../../../src/wantToppings/components/MovieDropdown';
import MovieForm from '../../../src/wantToppings/components/MovieForm';
import SearchBy from '../../../src/wantToppings/components/SearchBy';

xdescribe('MovieFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MovieFormContainer />);
  });

  it('should should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({
      selection: '',
      genre: '',
      movie: '',
    });
  });

  it('should render a MovieDropdown Component', () => {
    wrapper.setState({ selection: 'genre' });
    expect(wrapper.find(MovieDropdown)).toBePresent();
  });

  it('should render a MovieForm Component', () => {
    wrapper.setState({ selection: 'title' });
    expect(wrapper.find(MovieForm)).toBePresent();
  });

  it('should render a SearchBy Component', () => {
    expect(wrapper.find(SearchBy)).toBePresent();
  });

  // it('should render the correct query string when a genre is selected', () => {
  //   wrapper.setState({ genre: 'Action' });
  //   expect(wrapper.state().queryString.toEqual({ queryString: 'genre,Action' }))
  // })

  it('should render the MovieForm Component an onChange function', () => {
    wrapper.setState({ selection: 'title' });
    expect(wrapper.find(MovieForm).props()).toEqual({
      handleChangeText: jasmine.any(Function),
      handleFormSubmit: jasmine.any(Function)
    });
  });

  it('should render the MovieDropdown Component an onChange function', () => {
    expect(wrapper.find(MovieDropdown).props()).toEqual({
      handleChangeDropdown: jasmine.any(Function)
    });
  });

  it('should render the SearchBy Component an onChange function', () => {
    expect(wrapper.find(SearchBy).props()).toEqual({
      handleChangeSearch: jasmine.any(Function)
    });
  });
});
