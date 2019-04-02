import MovieDropdown from '../../../src/wantToppings/components/MovieDropdown';

describe('MovieDropdown', () => {
  let handleChangeDropdown,
      wrapper;

  beforeEach(() => {
    handleChangeDropdown = jasmine.createSpy('handleChangeGenre spy')
    wrapper = mount(
      <MovieDropdown
        value=''
        handleChangeDropdown={handleChangeDropdown}
      />
    );
  });

  it('should have the correct props', () => {
    expect(wrapper.props().value).toEqual('');
  });

  it('should render a dropdown menu', () => {
    expect(wrapper.find('select').length).toEqual(1);
  });

  it('should render 17 movie choices under the genre dropdown, plus on blank option', () => {
    expect(wrapper.find('select').find('option').length).toEqual(18);
  });

  it('should invoke the handleChangeDropdown function when a genre is selected', () => {
    wrapper.find('select').simulate('change', {target: { value : 'Action'}});

    expect(handleChangeDropdown).toHaveBeenCalled();
  });

});
