{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;\red82\green161\blue207;\red33\green44\blue51;\red23\green31\blue35;
\red149\green195\blue218;\red153\green176\blue193;\red218\green224\blue228;\red62\green170\blue99;\red129\green147\blue157;
}
{\*\expandedcolortbl;;\cssrgb\c38431\c69412\c84706;\cssrgb\c16863\c22745\c25882;\csgenericrgb\c9020\c12157\c13725;
\cssrgb\c64706\c80784\c88235;\cssrgb\c66275\c74510\c80000;\cssrgb\c88235\c90196\c91373;\cssrgb\c29020\c70980\c46275;\cssrgb\c57647\c64314\c67843;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs23\fsmilli11700 \cf2 \cb3 \expnd0\expndtw0\kerning0
\shad\shadx0\shady-20\shadr0\shado1 \shadc4 const\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  HtmlWebpackPlugin \cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 =\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf2 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 require\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 (\cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 'html-webpack-plugin'\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 );\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf9 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 //installed via npm\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
\cf2 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 const\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  webpack \cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 =\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf2 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 require\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 (\cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 'webpack'\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 );\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf9 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 //to access built-in plugins\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
\cf2 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 const\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  path \cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 =\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf2 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 require\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 (\cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 'path'\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 );\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
\
module\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 .\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 exports \cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 =\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \{\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
  entry\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 './path/to/my/entry/file.js'\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ,\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
  output\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \{\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
    filename\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 'my-first-webpack.bundle.js'\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ,\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
    path\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  path\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 .\cf2 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 resolve\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 (\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 __dirname\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ,\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 'dist'\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ),\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \},\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
  module\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \{\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
    rules\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 [\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
      \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \{\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
        test\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 /\\.(js|jsx)$/\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ,\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
        use\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 'babel-loader'\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ,\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
      \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \},\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
    \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ],\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \},\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
  plugins\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 [\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
    \cf2 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 new\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  webpack\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 .\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ProgressPlugin\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 (),\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
    \cf2 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 new\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  HtmlWebpackPlugin\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 (\{\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  template\cf6 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 :\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf8 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 './src/index.html'\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \}),\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
  \cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 ],\cf5 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \
\cf7 \shad\shadx0\shady-20\shadr0\shado1 \shadc4 \};}