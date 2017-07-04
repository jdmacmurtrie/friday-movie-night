import SuggestionContainer from '../../src/containers/SuggestionContainer';
import SuggestionForm from '../../src/components/SuggestionForm';

describe('SuggestionContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SuggestionContainer />);
  });

  it('should should have the specified inital state', () => {
    expect(wrapper.state()).toEqual({
      genre: 'none',
      topping_1: 'none',
      topping_2: 'none',
      queryString: ''
    });
  });

  it('should render a SuggestionForm Component', () => {
    expect(wrapper.find(SuggestionForm)).toBePresent();
  });

  it('should render the SuggestionForm Component an onChange function', () => {
    expect(wrapper.find(SuggestionForm).props()).toEqual({
      handleChangeGenre: jasmine.any(Function),
      handleChangeTopping1: jasmine.any(Function),
      handleChangeTopping2: jasmine.any(Function)
    });
  });
});
