import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ListGroup>
        <ListGroup.Item as={Link} to="/section1" action>
          კლასიკური OOP, კლასები
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/section2" action>
          OOP ჯავასკრიპტში
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/section3" action>
          კონსტრუქტორი ფუნქცია. new ოპერატორი
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/section4" action>
          prototype
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/section5" action>
          prototype chain
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/section6" action>
          ES6 კლასები
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/section7" action>
          კლასებს შორის მემკვიდრეობა
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
