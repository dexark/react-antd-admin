import { Request, Response } from 'express';
const { API_HOST } = process.env;
const mock = {};

mock[`POST ${API_HOST || ''}/uploads`] = (req: Request, res: Response) => {
  const file = req.files && req.files[0];
  res.send({
    code: 0,
    data: {
      id: 1,
      url:
        'https://static.wixstatic.com/media/559e40_74672baf12b84b0c8230b0c9aed13160~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/AIDTECH_white.webp" alt="AIDTECH_white.png',
      name: file['originalname'],
    },
    msg: '',
  });
};
mock[`GET ${API_HOST || ''}/500`] = (req: Request, res: Response) => {
  res.status(500).send({
    timestamp: 1513932555104,
    status: 500,
    error: 'error',
    message: 'error',
    path: '/500',
  });
};

mock[`GET ${API_HOST || ''}/404`] = (req: Request, res: Response) => {
  res.status(404).send({
    timestamp: 1513932643431,
    status: 404,
    error: 'Not Found',
    message: 'No message available',
    path: '/404',
  });
};

export default mock;
