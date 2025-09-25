

class MergingTwoArray{
    
     static int[] Merge(int a[], int b[], int m, int n){
        int i,j,k;
        i=j=k=0;
        int c[] = new int[m+n];


        while(i<m && j<n){
           
            if(a[i]<b[j]){
            c[k++] = a[i++];
            }
            else{
                c[k++] =b[j++];
            }

        }
        for( ; i<m; i++){
            c[k++] = a[i];
        }
        for( ;j<n; j++){
            c[k++] = b[j];
        }
        return c;
    }
    public static void main(String[] args) {
           int a[] = {2,10,18,20,23};
           int b[] = {4,9,19,25};
        int n  = a.length;
        int m = b.length;

           int c[] = Merge(a, b, n, m);
        for(int i=0; i<c.length; i++){
            System.out.println(c[i] + " ");
        }
    }
}