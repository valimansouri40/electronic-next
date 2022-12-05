import cookie from 'cookie'
export default async function cookieHandller (req, res){
        // console.log('mansourivali40@gmail.com', req.method , req.body)
        if(req.method === 'GET'){
            if (!req.headers.cookie) {
                res.status(403).json({ message: 'Not authorized!'});
                return;
              }
          
              const { token } = cookie.parse(req.headers.cookie);
              res.status(200).json({ token: token });

        }else if(req.method === 'POST' && req.body.token){
            // console.log(req.body.token)
            await res.setHeader(
                'Set-Cookie',
                cookie.serialize('token', req.body.token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV !== 'development',
                  maxAge: 60 * 60 * 24 * 7, // 1 week
                  sameSite: 'strict',
                  path: '/'
                })
              );
        }else{
            res.status(403).json({ message: 'Not authorized!'});

        }
}