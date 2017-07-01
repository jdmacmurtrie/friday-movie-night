import MovieDropdown from '../../src/components/MovieDropdown';

describe('MovieDropdown', () => {
  let handleChangeDropdown,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MovieDropdown
        handleChangeDropdown={jasmine.any(Function)}
      />
    );
  });

  it('should render a dropdown menu', () => {
    expect(wrapper.find('select').length).toEqual(1);
  });

  // it('should select the Action option from the dropdown', () => {
  //   wrapper.find('select').simulate('change', {target: { value : 'Action'}});
  //   expect(wrapper.find('select').value).toEqual('Action');
  // })
});
