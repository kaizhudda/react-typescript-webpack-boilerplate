import * as React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import * as PropTypes from 'prop-types';
import { fetchTest, FetchTestAction } from '../../store/actions';
import { StoreState } from '../../store/reducers';

interface HomeProps {
  fetchTest(): FetchTestAction;
  test: string;
}

export const _Home: React.FC<HomeProps> = (props): JSX.Element => {
  React.useEffect(() => {
    props.fetchTest();
  }, []);
  const { test } = props;
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta
          charSet="utf-8"
          name="description"
          content="We are building a super lightweight react boilerplate using webpack"
        />
      </Helmet>
      Homepage
      {test}
    </div>
  );
};

_Home.propTypes = {
  fetchTest: PropTypes.func,
  test: PropTypes.string
};

const mapStateToProps = (state: StoreState): { test: string } => {
  return { test: state.test };
};

export const Home = connect(
  mapStateToProps,
  { fetchTest }
)(_Home);
