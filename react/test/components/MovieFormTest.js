import MovieForm from '../../src/wantToppings/components/MovieForm';

describe('MovieForm', () => {
  let handleChangeText,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MovieForm
      handleChangeText={jasmine.any(Function)}
      />
    );
  });

  it('should render an input tag', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  // it('should find a button when text is entered', () => {
  //   wrapper.find('input').simulate('change', {target: {value: 'Up'}});
  //   expect(wrapper.find('button').length).toEqual('1');
  // })

  // it('should render an button after something is typed ', () => {
  //   let input = wrapper.find('input')
  //   input.node.value = 'Change';
  //   expect(wrapper.find('button').length).toEqual(1);
  // });
});
