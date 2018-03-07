import PizzaForm from '../../src/wantMovies/components/PizzaForm';
import ToppingFormContainer from '../../src/wantMovies/containers/ToppingFormContainer';

describe('PizzaForm', () => {
  let handleChange,
      wrapperForm,
      wrapperContainer;

  beforeEach(() => {
    wrapperForm = mount(
      <PizzaForm
      handleChange={jasmine.any(Function)}
      />
    );
  });

  it('should render a form tag', () => {
    expect(wrapperForm.find('form').length).toEqual(1);
  });

  it('should render 10 input tags', () => {
    expect(wrapperForm.find('input').length).toEqual(10);
  });

  it('should render 10 label tags', () => {
    expect(wrapperForm.find('label').length).toEqual(10);
  });
  //
  // it('should simulate clicking a topping', () => {
  //   wrapperContainer = mount(<ToppingFormContainer />)
  //   wrapperForm.find('Ham').simulate('click');
  //   expect(wrapperContainer.state()).toEqual({ toppings: ['Pepperoni'], queryString: ',Pepperoni' });
  // });

});
