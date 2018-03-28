import MovieForm from '../../../src/wantToppings/components/MovieForm';

describe('MovieForm', () => {
  let handleChangeText,
      handleFormSubmit,
      wrapper;

  beforeEach(() => {
    handleChangeText = jasmine.createSpy('handleChangeText spy')
    wrapper = mount(
      <MovieForm
        value=''
        handleChangeText={handleChangeText}
      />
    );
  });

  it('should have the correct props', () => {
    expect(wrapper.props().value).toEqual('');
  });

  it('should render a form', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render an input field', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should invoke the handleChangeGenre function when a genre is selected', () => {
    wrapper.find('input').simulate('change', {target: { value : 'Pirates of the Caribbean'}});

    expect(handleChangeText).toHaveBeenCalled();
  });
});
