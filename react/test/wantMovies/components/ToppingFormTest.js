import ToppingForm from '../../../src/wantMovies/components/ToppingForm';

describe('ToppingForm', () => {
  let handleChange,
      wrapper

  beforeEach(() => {
    handleChange = jasmine.createSpy('handleChange spy')
    wrapper = mount(
      <ToppingForm
        handleChange={handleChange}
      />
    );
  });

  it('should render a form tag', () => {
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should render 10 input fields with labels', () => {
    expect(wrapper.find('label').length).toEqual(10);
    expect(wrapper.find('input').length).toEqual(10);
  });


  it('should invoke the handleChange when a checkbox is checked', () => {
    wrapper.find('input').at(0).simulate('change', { target: { checked: true } })

    expect(handleChange).toHaveBeenCalled();
  });
});
