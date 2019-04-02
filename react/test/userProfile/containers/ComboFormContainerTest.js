import ComboFormContainer from '../../../src/userProfile/containers/ComboFormContainer';
import ComboForm from '../../../src/userProfile/components/ComboForm';

describe('ComboFormContainer', () => {
  let postNewCombo,
      wrapper;

  beforeEach(() => {
    spyOn(ComboFormContainer.prototype, 'handleChangeGenre').and.callThrough();
    spyOn(ComboFormContainer.prototype, 'handleChangeTopping').and.callThrough();
    spyOn(ComboFormContainer.prototype, 'handleSubmit').and.callThrough();
    spyOn(ComboFormContainer.prototype, 'resetForm').and.callThrough();
    postNewCombo = jasmine.createSpy('postNewCombo spy')

    wrapper = mount(
      <ComboFormContainer
        postNewCombo={postNewCombo}
      />
    );
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      genre: '',
      topping: ''
    });
  })

  it('should render a ComboForm Component', () => {
    expect(wrapper.find(ComboForm)).toBePresent();
  });

  it('should initially render the ComboForm component the correct props', () => {
    expect(wrapper.find(ComboForm).props()).toEqual({
      genreValue: '',
      toppingValue: '',
      handleSubmit: jasmine.any(Function),
      handleChangeGenre: jasmine.any(Function),
      handleChangeTopping: jasmine.any(Function)
    });
  });

  it('should render the ComboForm component the correct props after a selection has been made', () => {
    wrapper.setState({
      genre: 'War',
      topping: 'Pineapple'
    })

    expect(wrapper.find(ComboForm).props()).toEqual({
      genreValue: 'War',
      toppingValue: 'Pineapple',
      handleSubmit: jasmine.any(Function),
      handleChangeGenre: jasmine.any(Function),
      handleChangeTopping: jasmine.any(Function)
    });
  });

  it('should change the state when the ComboForm dropdowns are changed', () => {
    let form = wrapper.find(ComboForm);
    form.find('select').at(0).simulate('change', {target: { value : 'Adventure'}});
    form.find('select').at(1).simulate('change', {target: { value : 'Bacon'}});

    expect(wrapper.state()).toEqual({
      genre: 'Adventure',
      topping: 'Bacon'
    });
  });

  it('should render a button when a topping and genre are selected', () => {
    wrapper.setState({
      genre: 'War',
      topping: 'Pineapple'
    })

    expect(wrapper.find('button').length).toEqual(1)
  });

  it('should not render a button if only a genre or topping is selected', () => {
    wrapper.setState({
      genre: 'War'
    })

    expect(wrapper.find('button').length).toEqual(0)
  });

  describe('handleChangeGenre', () => {
    it('should be invoked when the handleChangeGenre property of the ComboForm component is called', () => {
      let form = wrapper.find(ComboForm);
      form.find('select').at(0).simulate('change', {target: { value : 'Action'}});

      expect(ComboFormContainer.prototype.handleChangeGenre).toHaveBeenCalled();
    });
  })

  describe('handleChangeTopping', () => {
    it('should be invoked when the handleChangeTopping property of the ComboForm component is called', () => {
      let form = wrapper.find(ComboForm);
      form.find('select').at(1).simulate('change', {target: { value : 'Bacon'}});

      expect(ComboFormContainer.prototype.handleChangeTopping).toHaveBeenCalled();
    });
  });

  describe('handleSubmit', () => {
    it('should be invoked when the handleSubmit funtion is called', () => {
      wrapper.setState({
        genre: 'War',
        topping: 'Pineapple'
      })

      wrapper.find('button').simulate('click')

      expect(ComboFormContainer.prototype.handleSubmit).toHaveBeenCalled();
    });
  });
});
