import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import Account from "./components/Account";
import Comments from "./components/Comments";
import Login from "./components/Login";
import { CartProvider } from "./context/CartContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand as={Link} to="/">
                Shopping App
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  {!isLoggedIn && (
                    <Nav.Link as={Link} to="/account">
                      Account
                    </Nav.Link>
                  )}
                  {isLoggedIn && (
                    <>
                      <Nav.Link as={Link} to="/product/1">
                        Product Details
                      </Nav.Link>
                      <Nav.Link as={Link} to="/cart">
                        Cart
                      </Nav.Link>
                      <Nav.Link as={Link} to="/account">
                        Account
                      </Nav.Link>
                      <Nav.Link as={Link} to="/comments">
                        Comments
                      </Nav.Link>
                    </>
                  )}
                </Nav>
                {isLoggedIn ? (
                  <Nav>
                    <Button variant="outline-secondary" onClick={handleLogout}>
                      Logout
                    </Button>
                  </Nav>
                ) : (
                  <Nav>
                    <Nav.Link as={Link} to="/login">
                      <Button variant="outline-primary">Login</Button>
                    </Nav.Link>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Container className="mt-4">
            <Routes>
              <Route
                path="/"
                element={isLoggedIn ? <ProductList /> : <Home />}
              />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              {!isLoggedIn && (
                <>
                  <Route path="/account" element={<Account />} />
                </>
              )}
              {isLoggedIn && (
                <>
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<ShoppingCart />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="/comments" element={<Comments />} />
                </>
              )}
            </Routes>
          </Container>
        </div>
      </CartProvider>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to the Shopping App</h2>
    <br />
    <h5>
      Please create account and login account for view the product details.
    </h5>
  </div>
);

export default App;
