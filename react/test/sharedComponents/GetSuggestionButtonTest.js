import GetSuggestionsButton from '../../src/sharedComponents/GetSuggestionsButton';

describe('GetSuggestionsButton', () => {
  let className,
      wrapper,
      handleFormSubmit

  beforeEach(() => {
    wrapper = mount(
      <GetSuggestionsButton
        className="get-toppings-button"
      />
    );
  });

  it('should render a div with the specific props', () => {
    expect(wrapper.find('div').props().className)
    .toEqual("get-toppings-button");
  });

  it('should render a button', () => {
    expect(wrapper.find('button')).toBePresent();
  });

  it('should render a button with the text property value', () => {
    expect(wrapper.find('button').text()).toBe('Get my suggestions!');
  });
});
