import SuggestionForm from '../../src/components/SuggestionForm';

describe('SuggestionForm', () => {
  let handleChangeDropdown,
      wrapper;

  beforeEach(() => {
    wrapper = mount(
      <SuggestionForm
        handleChangeGenre={jasmine.any(Function)}
        handleChangeTopping1={jasmine.any(Function)}
        handleChangeTopping2={jasmine.any(Function)}
      />
    );
  });

  it('should render 3 dropdown menus', () => {
    expect(wrapper.find('select').length).toEqual(3);
  });
});
