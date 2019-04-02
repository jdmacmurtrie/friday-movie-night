import UserProfileContainer from '../../../src/userProfile/containers/UserProfileContainer';
import ComboFormContainer from '../../../src/userProfile/containers/ComboFormContainer'
import UserInfoComponent from '../../../src/userProfile/components/UserInfoComponent'
import ComboTableContainer from '../../../src/userProfile/components/ComboTableContainer'

import fetchMock from 'fetch-mock'

describe('UserProfileContainer', () => {
  let wrapper;

  let user = {
    "user": {
      "first_name": "Bob",
      "last_name": "Msith",
      "email": "darthbob@dstar.emp",
      "combos": [
        {
          "id": "1",
          "genre": "Romance",
          "topping": "Sausage"
        }
      ]
    }
  }

  beforeEach(() => {
    spyOn(UserProfileContainer.prototype, 'getCombos').and.callThrough();
    spyOn(UserProfileContainer.prototype, 'postNewCombo').and.callThrough();
    spyOn(UserProfileContainer.prototype, 'deleteCombo').and.callThrough();

    fetchMock.get('/api/v1/users/1', {
      status: 200,
      body: user
    }).spy();
    wrapper = mount(
      <UserProfileContainer
        params={{id: 1}}
      />
    );
  });

  afterEach(fetchMock.restore)

  it('should render a UserInfoComponent', () => {
    expect(wrapper.find(UserInfoComponent)).toBePresent();
  });

  it('should render a ComboTableContainer', () => {
    expect(wrapper.find(ComboTableContainer)).toBePresent();
  });

  it('should render a ComboFormContainer', () => {
    expect(wrapper.find(ComboFormContainer)).toBePresent();
  });

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      user: {},
      combos: []
    });
  })

  it('should store the user and combos in state if they exist', done => {
    setTimeout(() => {
      expect(wrapper.state()).toEqual({
        user: {
          "first_name": "Bob",
          "last_name": "Msith",
          "email": "darthbob@dstar.emp",
          "combos": [
            {
              "id": "1",
              "genre": "Romance",
              "topping": "Sausage"
            }
          ]
        },
        combos: [
          {
            "id": "1",
            "genre": "Romance",
            "topping": "Sausage"
          }
        ]
      });
      done();
    }, 0)
  });

  describe('postNewCombo', () => {
    it('should invoke the postNewCombo function when a new combo is posted', () => {

      let genreDropdown = wrapper.find(ComboFormContainer).find('select').at(0)
      let toppingDropdown = wrapper.find(ComboFormContainer).find('select').at(1)
      genreDropdown.simulate('change', {target: { value : 'Horror'}});
      toppingDropdown.simulate('change', {target: { value : 'Olives'}});
      wrapper.find('button').at(2).simulate('click')

      expect(UserProfileContainer.prototype.postNewCombo).toHaveBeenCalled();
    })
  })

  describe('deleteCombo', () => {
    it('should invoke the deleteCombo function when a new combo is posted and remove it from state', done => {
      setTimeout(() => {
        let deleteButton = wrapper.find(ComboTableContainer).find('button').at(0)
        deleteButton.simulate('click')

        setTimeout(() => {
          expect(UserProfileContainer.prototype.deleteCombo).toHaveBeenCalled();
          done();
        })
      }, 0)
    })
  })
})
