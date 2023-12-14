import { render, screen } from '@testing-library/react';
import ApartmentProtectedIndex from '../pages/ApartmentProtectedIndex';
import { BrowserRouter } from 'react-router-dom';
import mockApartments from '../mockApartments';

describe("<ApartmentProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      id: 1
    }
    render(
      <BrowserRouter>
        <ApartmentProtectedIndex currentUser={currentUser} apartments={mockApartments}/>
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {
    const element = screen.getByText("My Listings:")
    expect(element).toBeInTheDocument()
  })
})