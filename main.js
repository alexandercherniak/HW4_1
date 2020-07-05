n = 50;
m = 50;

A = new Array(n);

for(i = 0; i < A.length; i++) {
  A[i] = new Array(m);
  for(j = 0; j < A[i].length; j++) { 
    A[i][j] = 0;
    if ((i + j <= n - 1 && i > j) || (i + j <= n - 1 && j > i && j >= (n - 1) / 2)) {
      A[i][j] = '<span>1</span>&nbsp;';
    } else {
      A[i][j] = '<span>0</span>&nbsp;'; 
    }
    document.write(A[i][j]);
  }
  document.write('<br />');
}

