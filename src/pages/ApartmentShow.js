import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ApartmentShow = ({apartments}) => {

  let {id} = useParams()
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)


  return (
    <>
    <div className="apartments-body">
      {currentApartment &&      
        <Card className='apartment-card'>
          <CardImg top width="100%" src={currentApartment?.image} alt="" />
          <CardBody className="apartment-text apartment-font-size">
            <div className="grid-row">
              <div className="show-apartment-info">
                <CardTitle><b>${currentApartment?.price}/month</b></CardTitle>
                <CardSubtitle>{currentApartment?.street}, {currentApartment?.city}, {currentApartment?.state}</CardSubtitle>
                <CardSubtitle>{currentApartment.bedrooms} Bedroom,  {currentApartment?.bathrooms} Bath</CardSubtitle>
                <CardSubtitle>Pets: {currentApartment?.pets}</CardSubtitle>
              </div>
            </div>
            <NavLink to={`/apartmentindex`} className="nav-link">
              <Button className="apartment-button">Back to Listings</Button>
            </NavLink>
          </CardBody>
        </Card>
      }
    </div>
    </>
  )
}

export default ApartmentShow