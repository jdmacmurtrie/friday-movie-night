import SearchBy from '../../src/wantToppings/components/SearchBy';

describe('SearchBy', () => {
  let handleChangeSearch,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SearchBy
        handleChangeSearch={jasmine.any(Function)}
      />
    );
  });

  // it('should render two radio tags', () => {
  //   expect(wrapper.find('radio').length).toEqual(2);
  // });
});
