import Amplify from 'aws-amplify';

export default Amplify.configure({
  Auth: {
    identityPoolId: 'us-east-1:156a7539-dac8-4e36-b1cb-6b217e04d4a2',
    region: 'us-east-1'
  },
  Interactions: {
    bots: {
      "SculptorBot": {
        "name": "SculptorBot",
        "alias": "Test",
        "region": "us-east-1",
      },
    }
  }
});