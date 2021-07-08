import { Request, Response } from 'express';
import mockjs from 'mockjs';
const { API_HOST } = process.env;
const mock = {};

mock[`GET ${API_HOST || ''}/pages/detail`] = (req: Request, res: Response) => {
  res.send({
    code: 0,
    data: mockjs.mock({
      userInfo: {
        name: 'SVDP',
        tel: '13770779817',
        courier: 'DHL',
        address: 'Baker Street',
        remark: 'None',
      },
      refundApplication: {
        ladingNo: '1000000000',
        saleNo: '1234123421',
        state: 'Approved',
        childOrders: '3214321432',
      },
      'returnGoods|5': [
        {
          id: '@integer(1,99999)',
          name: '@ctitle(5,10)',
          barcode: '@integer(100000000000000,999999999999999)',
          price: '@float(1,15,0,2)',
          num: '@integer(1,5)',
          amount: function() {
            return Number(this.price) * Number(this.num);
          },
        },
      ],
      'returnProgress|5': [
        {
          key: '@integer(1,99999)',
          time: '@datetime',
          rate: '@csentence(3, 5)',
          statuskey: '@boolean',
          status: function() {
            return this.statuskey ? 'success' : 'processing';
          },
          operator: 'Picker ID @integer(1000,9999)',
          cost: '@integer(1,5) h',
        },
      ],
    }),
  });
};

mock[`POST ${API_HOST || ''}/pages/form`] = (req: Request, res: Response) => {
  res.send({
    code: 0,
    data: '',
    msg: '',
  });
};

mock[`GET ${API_HOST || ''}/pages/brian`] = (req: Request, res: Response) => {
  res.send({
    code: 0,
    data: mockjs.mock({
      total: 1000,
      currentPage: 1,
      'list|10': [
        {
          id: '@integer(1)',
          'name|1': ['Nick Drake', 'Charlie Watts', 'Janis Joplin'],
          'desc|1': ['Self registered', 'Self registered', 'Manually registered'],
          'href|1': ['http://aid.technology', 'http://aid.technology', 'http://aid.technology'],
          'type|1': ['header', 'footer'],
        },
      ],
    }),
  });
};

mock[`POST ${API_HOST || ''}/pages/brian`] = (req: Request, res: Response) => {
  res.send({
    code: 0,
    data: '',
  });
};

mock[`PUT ${API_HOST || ''}/pages/brian/*`] = (req: Request, res: Response) => {
  res.send({
    code: 0,
    data: '',
  });
};

mock[`DELETE ${API_HOST || ''}/pages/brian/*`] = (
  req: Request,
  res: Response,
) => {
  res.send({
    code: 0,
    data: '',
  });
};

mock[`GET ${API_HOST || ''}/pages/brian/*`] = (req: Request, res: Response) => {
  res.send({
    code: 0,
    data: mockjs.mock({
      id: '@integer(1)',
      'name|1': ['Sybil Marvin', 'Gabriela Brown', 'Jasmine LeBon'],
      'desc|1': ['Self registered', 'Self registered', 'Manually registered'],
      'href|1': ['http://aid.technology', 'http://aid.technology', 'http://aid.technology'],
      'type|1': ['header', 'footer'],
    }),
  });
};

export default mock;
