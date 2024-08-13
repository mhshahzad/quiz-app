export const token =
  'b63179bd4eae1a65a87c89126aa373c4bfb8e97de6be4182b09a8437e2de8d07fa3b79a8140024cccddda220d012cae3e3be41296c799074e296642a30b7d20b0a9f2b028070ac0744a2799e2f8fbe6c4011c7c7ed2ebcf13a5de27564a0be2ec7d501d230fa61c124acb8b739ecb4e9a2edf402649db35a97a97a09f62fb597';
export const config = {
  headers: { Authorization: `Bearer ${token}` }
};

export const apiLink = 'http://localhost:1337/api/responses';
