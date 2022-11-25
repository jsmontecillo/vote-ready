import { render, screen } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthNav from "../auth-nav"

const user = {
    email: "janice@me.com",
    email_verified: true,
    sub: "google-oauth2|100651122565111587053"
  };

// intercept the useAuth0 function and mock it
jest.mock("@auth0/auth0-react")

describe("Navbar Component Tests - Logged in", () => {
    beforeEach(() => {
        // Mock the Auth0 hook and make it return a logged in state
     useAuth0.mockReturnValue({
     isAuthenticated: true,
     user,
     logout: jest.fn(),
     loginWithRedirect: jest.fn(),
   })
 })
    test("Logout Button displays when logged in", () => {
        render(
                <AuthNav />
        );
        const loginButton = screen.getByText(/log out/i);
        expect(loginButton).toBeInTheDocument();
    });

});