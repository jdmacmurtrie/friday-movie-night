import ComboForm from '../../../src/userProfile/components/ComboForm';

describe('ComboForm', () => {
  let handleChangeDropdown,
      genreValue,
      toppingValue,
      handleChangeGenre,
      handleChangeTopping,
      wrapper;

  beforeEach(() => {
    handleChangeGenre = jasmine.createSpy('handleChangeGenre spy')
    handleChangeTopping = jasmine.createSpy('handleChangeTopping spy')
    wrapper = mount(
      <ComboForm
        genreValue=''
        toppingValue=''
        handleChangeGenre={handleChangeGenre}
        handleChangeTopping={handleChangeTopping}
      />
    );
  });

  it('should have the correct props', () => {
    expect(wrapper.props().genreValue).toEqual('');
    expect(wrapper.props().toppingValue).toEqual('');
  });

  it('should render 2 dropdown menus', () => {
    expect(wrapper.find('select').length).toEqual(2);
  });

  it('should render 17 movie choices under the genre dropdown, plus on blank option', () => {
    expect(wrapper.find('select').at(0).find('option').length).toEqual(18);
  });

  it('should render 10 topping choices under the topping dropdown, plus one blank option', () => {
    expect(wrapper.find('select').at(1).find('option').length).toEqual(11);
  });

  it('should invoke the handleChangeGenre function when a genre is selected', () => {
    wrapper.find('select').at(0).simulate('change', {target: { value : 'Action'}});

    expect(handleChangeGenre).toHaveBeenCalled();
  });

  it('should invoke the handleChangeTopping function when a topping is selected', () => {
    wrapper.find('select').at(1).simulate('change', {target: { value : 'Bacon'}});

    expect(handleChangeTopping).toHaveBeenCalled();
  });
});
