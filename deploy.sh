GIT_NAME=`git config user.name`;
GIT_EMAIL=`git config user.email`;

rm -rf temp-deploy-folder &&
yarn build &&
git clone git@github.com:ecard-page/ecard-page.github.io.git temp-deploy-folder &&
rm -rf ./temp-deploy-folder/static &&
cp -r ./build/* ./temp-deploy-folder &&
cd ./temp-deploy-folder &&
git config user.name $GIT_NAME &&
git config user.email $GIT_EMAIL &&
git stage --all &&
git commit -m "autodeploy" &&
git push &&
cd ..
