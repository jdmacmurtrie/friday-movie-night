import MovieFormContainer from '../../../src/wantToppings/containers/MovieFormContainer';
import MovieDropdown from '../../../src/wantToppings/components/MovieDropdown';
import MovieForm from '../../../src/wantToppings/components/MovieForm';
import SearchBy from '../../../src/wantToppings/components/SearchBy';
import GetSuggestionsButton from '../../../src/sharedComponents/GetSuggestionsButton'

describe('MovieFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(MovieFormContainer.prototype, 'handleChangeText').and.callThrough();
    spyOn(MovieFormContainer.prototype, 'handleChangeDropdown').and.callThrough();
    spyOn(MovieFormContainer.prototype, 'handleChangeSearch').and.callThrough();
    spyOn(MovieFormContainer.prototype, 'handleSearchClear').and.callThrough();
    spyOn(MovieFormContainer.prototype, 'handleFormSubmit').and.callThrough();

    wrapper = mount(<MovieFormContainer />);
  });

  it('should should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({
      selection: 'title',
      genre: '',
      movie: '',
      queryString: ''
    });
  });

  it('should render a SearchBy Component', () => {
    expect(wrapper.find(SearchBy)).toBePresent();
  });

  it('should render a MovieForm Component by default', () => {
    expect(wrapper.find(MovieForm)).toBePresent();
  });

  it('should render a MovieDropdown Component if the Genre radio button is selected', () => {
    wrapper.setState({ selection: 'genre' });

    expect(wrapper.find(MovieDropdown)).toBePresent();
  });

  it('should render the SearchBy Component an onChange function', () => {
    expect(wrapper.find(SearchBy).props()).toEqual({
      handleChangeSearch: jasmine.any(Function)
    });
  });

  it('should render the MovieForm Component an onChange function', () => {
    expect(wrapper.find(MovieForm).props()).toEqual({
      value: '',
      handleChangeText: jasmine.any(Function),
      handleFormSubmit: jasmine.any(Function)
    });
  });

  it('should render the MovieDropdown Component an onChange function', () => {
    wrapper.setState({ selection: 'genre' });

    expect(wrapper.find(MovieDropdown).props()).toEqual({
      value: '',
      handleChangeDropdown: jasmine.any(Function)
    });
  });

  it('should render a GetSuggestionsButton when a movie is given', () => {
    wrapper.find(MovieForm).find('input').simulate('change', {target: { value : 'Pirates of the Caribbean'}});
    expect(wrapper.find(GetSuggestionsButton)).toBePresent();
  });

  it('should render a GetSuggestionsButton when a genre is chosen', () => {
    wrapper.setState({ selection: 'genre' });
    wrapper.find('select').simulate('change', {target: { value : 'Action'}});

    expect(wrapper.find(GetSuggestionsButton)).toBePresent();
  });

  it('should invoke the handleChangeSearch function and change the state when a radio button is clicked', () => {
    wrapper.find('input').at(1).simulate('click')

    expect(wrapper.state().selection).toEqual('genre');
    expect(MovieFormContainer.prototype.handleChangeSearch).toHaveBeenCalled();
  });

  it('should invoke the handleChangeText function and change the state when a box is checked', () => {
    wrapper.find(MovieForm).find('input').simulate('change', {target: { value : 'Pirates of the Caribbean'}});

    expect(wrapper.state().movie).toEqual('Pirates of the Caribbean')
    expect(wrapper.state().queryString).toEqual('title,Pirates of the Caribbean')
    expect(MovieFormContainer.prototype.handleChangeText).toHaveBeenCalled();
  });

  it('should invoke the handleFormSubmit function when a box is checked', () => {
    wrapper.find(MovieForm).find('input').simulate('change', {target: { value : 'Pirates of the Caribbean'}});
    wrapper.find('button').simulate('click')

    expect(MovieFormContainer.prototype.handleFormSubmit).toHaveBeenCalled();
  });

  it('should invoke the handleChangeDropdown function and change the state when a box is checked', () => {
    wrapper.setState({ selection: 'genre' });
    wrapper.find('select').simulate('change', {target: { value : 'Action'}});

    expect(wrapper.state().genre).toEqual('Action')
    expect(MovieFormContainer.prototype.handleChangeDropdown).toHaveBeenCalled();
  });
});
