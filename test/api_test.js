const index = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server! api_testing", () => {
  
  it("simple api", done => {
    chai
      .request(index)
      .post("/test_api")
      .send({ num1: 5, num2: 5 }) //for sending in body
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status')
        expect(res.body).to.have.property('status').to.equal("success");;
        expect(res.body).to.have.property('result')
        expect(res.body.result).to.nested.include({'a.abc[1]': 5});
        expect(res.body.result).to.have.nested.property('a.abc').include(62);
        expect(res.body.result).to.have.nested.property('a.abc').to.have.lengthOf(5)
        expect(res.body.result).to.have.property('c').to.deep.include({a1: 67});
        expect(res.body.result).to.have.property('d').to.be.false;
        done();
      });
  });
});