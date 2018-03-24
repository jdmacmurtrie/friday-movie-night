import SearchBy from '../../../src/wantToppings/components/SearchBy';

describe('SearchBy', () => {
  let handleChangeSearch,
      wrapper;

  beforeEach(() => {
    handleChangeSearch = jasmine.createSpy('handleChangeSearch spy')
    wrapper = mount(
      <SearchBy
        handleChangeSearch={handleChangeSearch}
      />
    );
  });

  it('should render a form', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render two input tags with labels', () => {
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('label').length).toEqual(2);
  });

  it('should render the title checked by default', () => {
    expect(wrapper.find('input').at(0).props().defaultChecked).toEqual(true);
  });

  it('should invoke the handleChangeSearch when a radio button is clicked', () => {
    wrapper.find('input').at(1).simulate('click')

    expect(handleChangeSearch).toHaveBeenCalled();
  });
});
