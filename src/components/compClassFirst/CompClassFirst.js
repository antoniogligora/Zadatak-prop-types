import React from "react";
import PropTypes from "prop-types";

export default class CompClassFirst extends React.Component {
  render() {
    const { korisnik } = this.props;

    return (
      <>
        <p>
          {korisnik.ime} - {korisnik.godine}
        </p>
      </>
    );
  }
}

CompClassFirst.propTypes = {
  korisnik: PropTypes.exact({
    ime: PropTypes.string,
    godine: PropTypes.number,
  }),
};
  