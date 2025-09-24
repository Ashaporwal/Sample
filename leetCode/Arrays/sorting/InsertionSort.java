public class InsertionSort {
    static void insertionSort(int a[],int n){
        for(int i=1; i<n; i++){
            int j=i-1;
            int x = a[i];
            while(j>-1 && a[j]>x){
                a[j+1] = a[j];
                j--;
            }
            a[j+1] = x;
        }
    }
    public static void main(String args[]){
        int arr[] = {2,6,10,15,20,25,30};
        int n  = arr.length;

        for(int i=0; i<n; i++){
            System.out.println(arr[i] + " ");
        }
    }
}
